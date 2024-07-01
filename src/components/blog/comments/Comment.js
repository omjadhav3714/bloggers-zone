import React from 'react'
import "../Blog.css"

const Comment = () => {
    return (
        <div className='mb-5' style={{ border: 0 }}>
            <div className="py-4">
                <p className="author ps-3 ms-3"
                    style={{
                        position: 'relative',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        fontFamily: 'sans-serif',
                        color: "#222"
                    }} >
                    TOP COMMENTS
                </p>

                <div className="d-flex flex-row flex-wrap">
                    <div className="col-lg-6 col-md 6 col-sm-12 pb-3 px-3">

                        <div className="d-inline-flex justify-content-between">
                            <p className="blog-comment pb-1 mb-0"
                                style={{
                                    fontWeight: 'bold',
                                    fontFamily: 'sans-serif',
                                    fontSize: '14px',
                                }}
                            >
                                User name
                            </p>
                        </div>
                        <p className='pt-0 mt-0 pb-1 mb-0' style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                            This is actual comment
                        </p>

                        <p style={{ fontSize:'0.85rem' }}>
                            01/07/2024
                        </p>

                        <button className="btn btn-danger">
                            Delete
                        </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Comment