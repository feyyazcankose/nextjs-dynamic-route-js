import React from 'react';
import PageNotFound from '../404';
import { findRoute } from '../../router/helper';
import { componentMap } from '../../router/component.map';

export default function MasterPage({ component, parameter, query }) {
    const DynamicComponent = componentMap[component];
    if (!DynamicComponent) {
        return <PageNotFound></PageNotFound>;
    }

    return (
        <div>
            <React.Suspense fallback={<div>Loading...</div>}>
                <DynamicComponent parameter={JSON.parse(parameter)} query={JSON.parse(query)} />
            </React.Suspense>
        </div>
    );
}


export const getServerSideProps = async ({ resolvedUrl }) => {
    const find = findRoute(resolvedUrl);
    return {
        props: {
            component: find?.route?.component ?? "404",
            parameter: JSON.stringify(find?.params ?? "{}"),
            query: JSON.stringify(find?.query ?? "{}")
        }
    }
}