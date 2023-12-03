import Link from "next/link";
import { Button, Result } from "antd";

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/ta/dashboard">
          <Button type="primary">Return Home</Button>
        </Link>
      }
    />
  );
}
