import bcrypt from "bcryptjs";
import mongoose from 'mongoose';
// var ObjectID = mongoose.ObjectID;

const data={

    users: [
        {
          name: 'Alan',
          email: 'admin@admin.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@user.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    departments:[
        {
            name:'Syska',
            image:'https://s16458.pcdn.co/wp-content/uploads/2019/11/Anker-Charger-250x300.jpg'
        },
        {
            name:'Smartwatches',
            image:'https://cf1.s3.souqcdn.com/item/2020/10/14/13/19/07/98/9/item_L_131907989_d72314784445f.jpg'
        },
        {
            name:'Laptops',
            image:'https://images-na.ssl-images-amazon.com/images/I/91MW2X7lrfL.__AC_SX300_SY300_QL70_ML2_.jpg'
        },
        {
            name:'Smartphones',
            image:'https://s3b.cashify.in/gpro/uploads/2020/10/13211658/iphone-12-pro-family-250x300.jpeg'
        },
        {
            name:'Clothes',
            image:'http://www.countryboylifestyle.com/UserPanel/UserPanel/Uploads/432637553103879714328_small_MI.jpg'
        },
        {
            name:'SmartTv',
            image:'http://www.krisons.com/product_images/KR-32-LED-TV-T.jpg'
        },
        {
            name:'Computers',
            image:'https://aigostore.b-cdn.net/wp-content/uploads/2020/10/HTB1F4_vclCw3KVjSZR0q6zcUpXau-250x300.jpg'
        },
        {
            name:'Shoes',
            image:'http://tirupurbrands.in/wp-content/uploads/2018/07/5-250x300.jpg'
        },
    ],
    phones:[
        {
            _id:'1',
            image:'https://www.gizmochina.com/wp-content/uploads/2020/10/Apple-iPhone-12-Mini-500x500.jpg'
        },
        {
            _id:'2',
            image:'https://m.media-amazon.com/images/I/41KqaHvwcpL.jpg'
        },
        {
            _id:'3',
            image:'https://5.imimg.com/data5/SELLER/Default/2021/10/NX/PB/IK/77676186/google-pixel-5-5g-500x500-500x500.jpg'
        },
        {
            _id:'4',
            image:'https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-Pro-Max-1-500x500.jpg'
        },
        {
            _id:'5',
            image:'https://m.media-amazon.com/images/I/415z6pkibAL.jpg'
        },
        {
            _id:'6',
            image:'https://s3b.cashify.in/gpro/uploads/2021/05/20050625/google-pixel-6-pro-extra-1.png'
        },
        {
            _id:'7',
            image:'https://5.imimg.com/data5/SELLER/Default/2021/9/MH/CD/OY/93370416/oneplus-8-glacial-green-6gb-ram-128gb-storage--500x500.jpg'
        },
        {
            _id:'8',
            image:'https://www.gizmochina.com/wp-content/uploads/2020/04/cats-500x500.jpg'
        },
        {
            _id:'9',
            image:'https://www.gizmochina.com/wp-content/uploads/2021/07/noname-500x500.jpg'
        },
        {
            _id:'10',
            image:'https://fdn.gsmarena.com/imgroot/news/21/11/vivo-y76s-official/inline/-1200x500m/gsmarena_003.jpg'
        },
        
    ],
    products:[
        {
            name:'MYao Magnetic Wireless Power Bank, 15W Wireless Portable Phone Charger 10000mAh, 4 Output PD 20W',
            image:'https://s.alicdn.com/@sc04/kf/Hdcb7ea9a3c8b4767bc46f8fde3a99ad9u.png_300x300.png',
            brand:'Syska',
            category:'Electronics',
            department: new mongoose.Types.ObjectId('637236c5b8b83019ee8043de'),
            description:'Good Product',
            price:'49.99',
            numReviews:'237',
            rating:2,
            countInStock:19
        },
        {

            name:'ADCB POW1 - Emergency USB Battery Powered Power Bank Compact Portable 4 AA Batteries Ideal',
            image:'https://gardibazar.com/wp-content/uploads/2019/04/full_1301-250x300.jpg',
            brand:'Syska',
            category:'Electronics',
            department: new mongoose.Types.ObjectId('637236c5b8b83019ee8043de'),
            description:'Good Product',
            price:'24.99',
            numReviews:'68',
            rating:5,
            countInStock:0
        },
        {
            name:'mophie snap+ juice pack mini - Magnetic and portable wireless charger containing a 5,000mAh internal battery. - Black',
            image:'https://20fd661yccar325znz1e9bdl-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/anker-20100mah-powercore-high-capacity-power-bank-power-bank-250x300.jpg',
            brand:'Syska',
            category:'Electronics',
            department: new mongoose.Types.ObjectId('637236c5b8b83019ee8043de'),
            description:'Good Product',
            price:'18.56',
            numReviews:'492',
            rating:4.5,
            countInStock:25
        },
        {
            
            name:'Hermitshell Hard EVA Travel Case Fits Anker PowerCore 13000 Portable Charger - Compact 13000mAh',
            image:'https://images-eu.ssl-images-amazon.com/images/I/3173lBxbF3L._SX300_SY300_QL70_ML2_.jpg',
            brand:'Syska',
            category:'Electronics',
            department: new mongoose.Types.ObjectId('637236c5b8b83019ee8043de'),
            description:'Good Product',
            price:'32.27',
            numReviews:'1354',
            rating:3,
            countInStock:12
        },
        {
            
            name:'Portable Bluetooth Speakers, IPX7 Waterproof Wireless Bluetooth Speaker, Outdoor Mini Speaker',
            image:'https://s.alicdn.com/@sc04/kf/Hdcb7ea9a3c8b4767bc46f8fde3a99ad9u.png_300x300.png',
            brand:'Syska',
            category:'Electronics',
            department: new mongoose.Types.ObjectId('637236c5b8b83019ee8043de'),
            description:'Good Product',
            price:'149.98',
            numReviews:'674',
            rating:3.5,
            countInStock:5
        },
        {
            
            name:'Sony SRS-XB13 Extra BASS Wireless Portable Compact Speaker IP67 Waterproof Bluetooth, Light Blue',
            image:'https://i.ebayimg.com/thumbs/images/g/FJcAAOSwRglhWFGi/s-l300.jpg',
            brand:'Syska',
            category:'Electronics',
            description:'Good Product',
            department: new mongoose.Types.ObjectId('637236c5b8b83019ee8043de'),
            price:'312.95',
            numReviews:'4859',
            rating:4.5,
            countInStock:53
        },
        {
            
            name:'New Bose SoundLink Flex Bluetooth Portable Speaker, Wireless Waterproof Speaker for Outdoor Travel - Black',
            image:'https://images-na.ssl-images-amazon.com/images/I/81WI54kMFoL.__AC_SX300_SY300_QL70_ML2_.jpg',
            brand:'Syska',
            category:'Electronics',
            department: new mongoose.Types.ObjectId('637236c5b8b83019ee8043de'),
            description:'Good Product',
            price:'499.99',
            numReviews:'4',
            rating:4,
            countInStock:43
        },
        {

            name:'JBL Flip 4, Black - Waterproof, Portable & Durable Bluetooth Speaker - Up to 12 Hours of Wireless Streaming ',
            image:'https://www.cellcom.com/resources/phones/5706_JBL_Flip5_big.jpg',
            brand:'Syska',
            category:'Electronics',
            department: new mongoose.Types.ObjectId('637236c5b8b83019ee8043de'),
            description:'Good Product',
            price:'278.99',
            numReviews:'912',
            rating:5,
            countInStock:34
        }
    ]
}
export default data;
