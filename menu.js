// ============================================================================
//   منوی گریل زون  —  فقط همین فایل را برای تغییر منو ویرایش کنید
// ============================================================================
//
//  قیمت:     price: 285000        ← به تومان، عدد انگلیسی، بدون ویرگول
//                                    (0 یعنی «قیمت به‌زودی»)
//  توضیحات:  desc: 'برگر ۱۵۰ گرمی، پنیر چدار، سس مخصوص'
//  عکس:      عکس را کنار همین فایل آپلود کنید و اسمش را بنویسید:
//            img: 'classic-burger.jpg'
//  ناموجود:  soldOut: true
//  برچسب:    tag: 'spicy'   ('spicy' تند | 'special' ویژه | 'popular' پرطرفدار | 'new' جدید)
//
//  ⚠️ متن‌ها بین دو ' باشند و ویرگول آخر هر خط را پاک نکنید.
// ============================================================================

window.GRILLZONE = {

  shop: {
    name: 'گریل زون',
    phone: '09381811871',
    address: 'چالوس، رادیو دریا، جنب مسجد ابوالفضلی',
    hours: '',   // مثلاً: 'همه‌روزه ۱۲ ظهر تا ۱۲ شب'
  },

  categories: [
    { id: 'burger',  title: 'برگر',     icon: '🍔' },
    { id: 'hotdog',  title: 'هات‌ داگ',  icon: '🌭' },
    { id: 'salad',   title: 'سالاد',    icon: '🥗' },
    { id: 'drink',   title: 'نوشیدنی',    icon: '🥤' },
  ],

  items: [
    // ─────────────── برگر ───────────────
    { cat: 'burger', name: 'برگر کلاسیک',     price: 680000, desc: 'برگر 150 گرمی، سس مخصوص', img: 'classic-burger.jpg' },
    { cat: 'burger', name: 'چیز برگر',          price: 750000, desc: 'برگر 150 گرمی، سس مخصوص، پنیر چدار', img: 'chiz-burger.jpg' },
    { cat: 'burger', name: 'ماشروم برگر',      price: 0, desc: '', img: '' },
    { cat: 'burger', name: 'پستو برگر',        price: 0, desc: '', img: '' },
    { cat: 'burger', name: 'کاراملایز برگر',   price: 0, desc: '', img: '' },
    { cat: 'burger', name: 'هالوپینو برگر',    price: 0, desc: '', img: '', tag: 'spicy' },
    { cat: 'burger', name: 'چیکن برگر',        price: 0, desc: '', img: '' },
    { cat: 'burger', name: 'رنچ برگر',         price: 0, desc: '', img: '' },

    // ─────────────── هات‌داگ ───────────────
    { cat: 'hotdog', name: 'هات‌ داگ کلاسیک',    price: 0, desc: '', img: '' },
    { cat: 'hotdog', name: 'هات‌ داگ کاراملایز', price: 0, desc: '', img: '' },
    { cat: 'hotdog', name: 'هات‌ داگ مکزیکی',    price: 0, desc: '', img: '', tag: 'spicy' },
    { cat: 'hotdog', name: 'هات‌ داگ چیلی چیز',  price: 0, desc: '', img: '' },

    // ─────────────── سالاد ───────────────
    { cat: 'salad',  name: 'سالاد سزار',       price: 0, desc: '', img: '' },
    { cat: 'salad',  name: 'سالاد انتروکوت',   price: 0, desc: '', img: '' },
    { cat: 'salad',  name: 'کول اسلاو',        price: 0, desc: '', img: '' },

   // ─────────────── نوشیدنی ───────────────
    { cat: 'drink',  name: 'کوکاکولا',       price: 0, desc: '', img: '' },
    { cat: 'drink',  name: 'پپسی',   price: 0, desc: '', img: '' },
    { cat: 'drink',  name: 'کولا زیرو',        price: 0, desc: '', img: '' },
    { cat: 'drink',  name: 'دوغ',        price: 0, desc: '', img: '' },
  ],
  
};
