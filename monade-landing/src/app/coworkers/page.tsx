import { redirect } from "next/navigation";

// The AI Coworkers story lives on the home page now.
export default function CoworkersPage() {
  redirect("/#coworkers");
}
