import Image from 'next/image';
const cardData = [
    {
        id: 1,
        title: 'Art stuff',
        titleColor: 'text-[#9747FF]',
        price: '598 TK',
        priceColor: 'text-[#5D06CD]',
        num: '1 of 09',
        numColor: 'text-[#000000]',
        image: 'bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]',
        circle1: 'bg-gradient-to-r from-[#9747FF] to-[#651BC6]',
        circle2: 'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
        textColor1: 'text-white',
        textColor2: 'text-black',
        borderColor: 'border-[#9747FF6E]',
        participants: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
    },
    {
        id: 2,
        title: 'ABCD',
        titleColor: 'text-[#047439]',
        price: '777 TK',
        priceColor: 'text-[#005528]',
        num: '1 of 19',
        numColor: 'text-[#005528]',
        image: 'bg-gradient-to-r from-[#0FA958] to-[#94FFE6]',
        circle1: 'bg-gradient-to-r from-[#9747FF] to-[#651BC6]',
        circle2: 'bg-gradient-to-r from-[#6D8BB4] to-[#016EFF]',
        textColor1: 'text-white',
        textColor2: 'text-white',
        participants: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
    },
    {
        id: 3,
        title: 'EFGH',
        titleColor: 'text-[#000000]',
        price: '58 TK',
        priceColor: 'text-[#000000]',
        num: '1 of 64',
        image: 'bg-gradient-to-r from-[#2768BF] to-[#E6E6E6]',
        circle1: 'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
        circle2: 'bg-gradient-to-r from-[#9747FF] to-[#E76666]',
        textColor1: 'text-black',
        textColor2: 'text-black',
        participants: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
    },
    {
        id: 4,
        title: 'XYZ',
        titleColor: 'text-[#000000]',
        price: '0',
        priceColor: 'text-[#000000]',
        num: '1 of 08',
        image: 'bg-gradient-to-r from-[#4C2F72] to-[#BE92FB]',
        circle1: 'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
        circle2: 'bg-gradient-to-r from-[#9747FF] to-[#E76666]',
        textColor1: 'text-black',
        textColor2: 'text-black',
        participants: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
    },
    {
        id: 5,
        title: 'Art stuff',
        titleColor: 'text-[#000000]',
        price: '598 TK',
        priceColor: 'text-[#000000]',
        num: '1 of 09',
        image: 'bg-gradient-to-r from-[#DED4F8] to-[#BE92FB]',
        circle1: 'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
        circle2: 'bg-gradient-to-r from-[#FEFDFF] to-[#E76666]',
        textColor1: 'text-black',
        textColor2: 'text-black',
        participants: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
    },
    {
        id: 6,
        title: 'ABCD',
        titleColor: 'text-[#000000]',
        price: '777 TK',
        priceColor: 'text-[#000000]',
        num: '1 of 19',
        image: 'bg-gradient-to-r from-[#0FA958] to-[#94FFE6]',
        circle1: 'bg-gradient-to-r from-[#9747FF] to-[#651BC6]',
        circle2: 'bg-gradient-to-r from-[#6D8BB4] to-[#016EFF]',
        textColor1: 'text-white',
        textColor2: 'text-white',
        participants: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
    },
    {
        id: 7,
        title: 'EFGH',
        titleColor: 'text-[#000000]',
        price: '58 TK',
        priceColor: 'text-[#000000]',
        num: '1 of 64',
        image: 'bg-gradient-to-r from-[#2768BF] to-[#E6E6E6]',
        circle1: 'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
        circle2: 'bg-gradient-to-r from-[#9747FF] to-[#E76666]',
        textColor1: 'text-black',
        textColor2: 'text-black',
        participants: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
    },
    {
        id: 8,
        title: 'XYZ',
        titleColor: 'text-[#000000]',
        price: '0',
        priceColor: 'text-[#000000]',
        num: '1 of 06',
        image: 'bg-gradient-to-r from-[#4C2F72] to-[#BE92FB]',
        circle1: 'bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9]',
        circle2: 'bg-gradient-to-r from-[#9747FF] to-[#E76666]',
        textColor1: 'text-black',
        textColor2: 'text-black',
        participants: [
            '/images/Ellipse 9.png',
            '/images/Ellipse 11.png',
            '/images/Ellipse 8.png',
            '/images/Ellipse 10.png'
        ],
    },
];

const Discover = () => {
    return (
        <div className="p-4 lg:p-8 mt-14 lg:w-[85%] mx-auto mb-10">
            <h1 className="text-3xl font-black mb-7 text-center lg:text-start md:text-start">DISCOVER MORE</h1>

            {/* Categories */}
            <div className="flex flex-col lg:flex-row md:flex-row lg:justify-between md:justify-between mb-10 space-y-4">
                <div className='space-x-4 space-y-4 lg:space-x-6 lg:space-y-0 text-xs font-medium'>
                    <button className="px-3 py-2 bg-[#3F05D4] text-white rounded-full">All Categories</button>
                    <button className="px-3 py-2 bg-[#E9E9E9] rounded-full">Art</button>
                    <button className="px-3 py-2 bg-[#E9E9E9] rounded-full">Celebrities</button>
                    <button className="px-3 py-2 bg-[#E9E9E9] rounded-full">Gaming</button>
                    <button className="px-3 py-2 bg-[#E9E9E9] rounded-full">Sport</button>
                    <button className="px-3 py-2 bg-[#E9E9E9] rounded-full">Music</button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="flex items-center px-4 py-2 bg-[#E9E9E9] text-[#4000FF] rounded-full font-medium text-xs">
                        <Image src="/images/ion_filter.png" alt="" className="mr-2" />
                        All Filters
                    </button>
                </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[95%] lg:w-full md:w-[90%] mx-auto">
                {cardData.map((card) => (
                    <div key={card.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 lg:w-[290px] h-[405px] overflow-hidden p-4">
                        {/* Card Image */}
                        <div className={`${card.image} h-[215px] rounded-2xl`}></div>
                        <div className="p-2">
                            {/* Participants */}
                            <div className="flex -space-x-3 -mt-6 mb-3">
                                {card.participants.map((participant, index) => (
                                    <Image key={index} src={participant} alt={`Participant ${index + 1}`} className="w-8 h-8 bg-gray-300 rounded-full" />
                                ))}
                            </div>

                            {/* Title, Price and Number */}
                            <h3 className={`text-xl font-semibold mb-5 ${card.titleColor}`}>{card.title}</h3>
                            <div className="flex justify-between mb-5">
                                <p className={`text-xs ${card.priceColor}`}>{card.price}</p>
                                <p className={`text-[10px] ${card.numColor}`}>{card.num}</p>
                            </div>

                            {/* Buttons */}
                            <div className="flex justify-between">
                                <button className={`px-5 py-3 text-[10px] rounded-3xl ${card.circle1} ${card.textColor1}`}>
                                    DSVBD
                                </button>
                                <button className={`border px-5 py-3 text-[10px] rounded-3xl ${card.circle2} ${card.textColor2} ${card.borderColor}`}>
                                    DSVBD
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Discover;