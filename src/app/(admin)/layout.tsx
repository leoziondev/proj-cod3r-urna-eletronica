import LayoutVotacao from "@/components/shared/LayoutVotacao";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <LayoutVotacao>{children}</LayoutVotacao>
}