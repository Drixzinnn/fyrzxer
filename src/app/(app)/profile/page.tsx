import { UserRound } from "lucide-react";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata = { title: "Perfil" };

export default function Page() {
  return (
    <EmptyState
      icon={UserRound}
      title="Seu perfil"
      description="Cadastro, login e edição de perfil chegam na fase 1."
    />
  );
}
