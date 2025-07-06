'use client'

import Layout from "@/components/Layout";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function Home() {
  return (
    <Layout>
      <h2 className="mb-4 text-lg font-semibold">Example Usage</h2>
<Button variant="primary">Save</Button>
<Button variant="secondary">Cancel</Button>
<Button variant="danger">Delete</Button>

<Input variant="default" placeholder="Your name" />
<Input variant="error" placeholder="Invalid input" />

    </Layout>
  );
}
