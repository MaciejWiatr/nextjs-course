/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import Link from "next/link";

const Page = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div sx={{ variant: "containers.page" }}>
            <h1>Note: {id} </h1>
        </div>
    );
};

export default Page;

export async function getServerSideProps({ params, req, res }) {
    const response = await fetch(
        `${process.env.API_URL}/api/notes/${params.id}`
    );

    // // so much power!
    // if (!response.ok) {
    //     res.writeHead(301, {
    //         location: "/notes",
    //     });
    //     res.end();
    //     return { props: {} };
    // }

    const { data } = await response.json();

    if (data) {
        return {
            props: { note: data },
        };
    }
}
