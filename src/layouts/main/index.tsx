import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

const MainLayout = (props: Props) => {
    return (
        <main>
            {props.children}
        </main>
    );
}

export default MainLayout;