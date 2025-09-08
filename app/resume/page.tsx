export default function ResumePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop:'-100px'}}>
      <iframe
        src="/resume.pdf#toolbar=0&view=FitH"
        className="md:w-full"
        style={{ width: '90vw', height: '90vh', border: 'none' , position: 'absolute' ,maxWidth:"800px"} }
        title="Dennis Wang Resume, Sept7"
      />
    </div>
  );
}