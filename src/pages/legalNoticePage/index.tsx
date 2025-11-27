import Layout from "../../components/layout";
import DocxViewer from "../../components/docxViewer";

const LegalNoticePage = () => {
  return (
    <Layout>
      <div className="mt-16 md:mt-24">
        <DocxViewer src="/MDM_AVISO LEGAL.docx" title="Aviso Legal" />
      </div>
    </Layout>
  );
};

export default LegalNoticePage;
