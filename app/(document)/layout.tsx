import DocumentHeader from "./components/DocumentHeader";

const DocumentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="bg-document-background min-h-screen">
      <DocumentHeader />
      {children}
    </main>
  );
};

export default DocumentLayout;
