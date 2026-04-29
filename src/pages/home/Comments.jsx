import React from 'react';
const shopComments = [
    {
        userId: "user_0812",
        userName: "Arif Ahmed",
        rating: 5,
        comment: "The delivery was incredibly fast, and the packaging for 'Coffee Mug' is top-notch. I love the eco-friendly approach they take with their parcels.",
        category: "Service",
        date: "2026-04-20"
    },
    {
        userId: "user_2234",
        userName: "Sophia Rahman",
        rating: 4,
        comment: "Great customer support! I had a question about my order tracking and the team replied within ten minutes. Highly recommend this shop for reliable service.",
        category: "Testimonial",
        date: "2026-04-25"
    },
    {
        userId: "user_1109",
        userName: "Tanvir Hossain",
        rating: 5,
        comment: "Coffee Mug has become my go-to online store. The website is easy to navigate, and the checkout process is seamless. A very professional experience overall.",
        category: "Service",
        date: "2026-04-28"
    }
];

const Comments = () => {
    return (
        <div className='container mx-auto px-2 md:px-4 bg-amber-900/10 py-8 rounded-lg mb-10'>
            <div className='text-center'>
                <h2 className='text-amber-900 font-bold text-xl mb-2'>Customer Reviews</h2>
                <p className='text-gray-600 mb-4'>See what our customers are saying about us!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-evenly gap-4'>
                {shopComments.map((comment) => (
                    <div key={comment.userId} className="bg-white shadow-md rounded-lg p-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-amber-900 font-semibold">{comment.userName}</h3>
                            <span className="text-gray-500 text-sm">{comment.date}</span>
                        </div>
                        <p className="text-gray-600 mb-2">''{comment.comment}''</p>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < comment.rating ? "text-amber-900" : "text-gray-300"}>★</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;