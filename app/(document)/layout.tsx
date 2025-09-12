import DocumentHeader from "./components/DocumentHeader";
import MenuBar from "./components/MenuBar";

const DocumentLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <DocumentHeader />
      <MenuBar />
      {children}
    </div>
  );
};

export default DocumentLayout;
