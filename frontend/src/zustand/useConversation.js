import { create } from "zustand";

const useConversation = create((set, get) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => {
		const currentState = get();
		
		// Handle both direct values and functional updates
		if (typeof messages === 'function') {
			const updatedMessages = messages(currentState.messages);
			set({ messages: Array.isArray(updatedMessages) ? updatedMessages : [] });
		} else {
			set({ messages: Array.isArray(messages) ? messages : [] });
		}
	},
}));

export default useConversation;
