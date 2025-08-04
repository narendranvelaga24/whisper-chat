import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			console.log("useGetMessages - fetching messages for conversation:", selectedConversation?._id);
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				console.log("useGetMessages - received data:", data);
				setMessages(Array.isArray(data) ? data : []);
			} catch (error) {
				console.error("useGetMessages - error:", error);
				toast.error(error.message);
				setMessages([]);
			} finally {
				setLoading(false);
			}
		};

		// Only fetch if we don't already have messages for this conversation
		if (selectedConversation?._id && messages.length === 0) {
			getMessages();
		} else if (selectedConversation?._id) {
			console.log("useGetMessages - skipping fetch, already have messages:", messages.length);
		}
	}, [selectedConversation?._id, setMessages, messages.length]);

	return { messages, loading };
};
export default useGetMessages;
