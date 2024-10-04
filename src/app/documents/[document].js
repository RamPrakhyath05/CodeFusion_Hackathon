// app/documents/[document].js
import { useRouter } from 'next/navigation';

export default function DocumentPage() {
  const router = useRouter();
  const { document } = router.query; 
  return (
    <div>
      <h1>{document} Details</h1>
      <p>Details about {document} will go here.</p>
    </div>
  );
}
