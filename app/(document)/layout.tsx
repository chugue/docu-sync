import DocumentHeader from "./components/DocumentHeader";

const DocumentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <DocumentHeader />
      {children}
    </div>
  );
};

export default DocumentLayout;
