import React from 'react';

const StarRating = () => {
    return (
        <div className="text-center">
            <div className="flex justify-center items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                        <path d="M12 .587l3.297 6.673 7.4.637-5.367 5.048 1.641 7.236-6.571-3.429-6.571 3.43 1.641-7.237L1.303 7.897l7.4-.637L12 .587z" />
                    </svg>
                ))}
            </div>
            <p className=" text-gray-200 font-semibold text-sm">Loved by 2392 users</p>
        </div>
    );
};

export default StarRating;
