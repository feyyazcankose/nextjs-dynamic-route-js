import React from 'react'
export default function BlogDetailPage({ parameter, query }) {
    return (
        <div>
            {parameter && parameter["parameter"]}
            {query && query["query"]}
        </div>
    )
}
