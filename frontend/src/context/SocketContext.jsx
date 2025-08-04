import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
	const [socket, setSocket] = useState(null);
	const [onlineUsers, setOnlineUsers] = useState([]);
	const { authUser } = useAuthContext();

	useEffect(() => {
		if (authUser && authUser._id) {
			// Add a small delay to ensure user is fully loaded
			setTimeout(() => {
				const socket = io(import.meta.env.VITE_BACKEND_URL || "http://localhost:4000", {
					query: {
						userId: authUser._id,
					},
					transports: ['websocket', 'polling'],
					timeout: 20000,
				});

				socket.on("connect", () => {
					// Socket connected successfully
				});

				socket.on("connect_error", (error) => {
					console.error("Socket connection error:", error);
				});

				socket.on("disconnect", (reason) => {
					// Socket disconnected
				});

				setSocket(socket);

				// socket.on() is used to listen to the events. can be used both on client and server side
				socket.on("getOnlineUsers", (users) => {
					setOnlineUsers(users);
				});
			}, 100);

			return () => {
				if (socket) {
					socket.close();
				}
			};
		} else {
			if (socket) {
				socket.close();
				setSocket(null);
			}
		}
	}, [authUser]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};
