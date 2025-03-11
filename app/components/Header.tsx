import Link from "next/link";

export const Header = () => {
    return (
        <header className="h-[60px] font-inter flex justify-start gap-4 items-center sticky top-0 w-full bg-sky-950 text-white px-4">

            <span className="text-2xl font-bold">tRPC</span>

            <nav className="flex gap-4 ml-auto">
                <Link href="/page-1" className="hover:underline">
                    Page 1
                </Link>
                <Link href="/page-2" className="hover:underline">
                    Page 2
                </Link>
                <Link href="/auth-page" className="hover:underline">
                    Auth Page
                </Link>
            </nav>
        </header>
    );
};
