import { create } from "zustand";
import { User } from "@/utils/shared/types";

type Actions = {
  loginUser: (user: User) => void;
};

export const useUserStore = create<User & Actions>((set) => ({
  created_at: "",
  email: "",
  id: "",
  profile: "",
  updated_at: "",
  isLoggedin: false,
  loginUser: (user) => set({ ...user }),
}));
