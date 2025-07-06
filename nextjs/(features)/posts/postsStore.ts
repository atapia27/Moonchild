import { create } from "zustand";

// 1. Define state shape
interface PostState {
  selectedPostId: number | null;
}

// 2. Define actions shape
interface PostActions {
  setSelectedPostId: (id: number | null) => void;
}

// 3. Combine into the store
export const usePostStore = create<PostState & PostActions>((set) => ({
  // State
  selectedPostId: null,

  // Actions
  setSelectedPostId: (id) => set({ selectedPostId: id }),
}));
