import Link from "next/link"
import Image from "next/image"
import { Play, Star, Calendar, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MovieCard from "@/components/movie-card"
import FeaturedMovie from "@/components/featured-movie"
import CategoryPill from "@/components/category-pill"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white" dir="rtl">
      {/* Header */}
      <header className="relative z-10 px-6 py-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-10">
          <Link href="/" className="text-2xl font-bold text-red-500">
            سينما<span className="text-white">بلس</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white hover:text-red-500 transition">
              الرئيسية
            </Link>
            <Link href="/movies" className="text-white hover:text-red-500 transition">
              الأفلام
            </Link>
            <Link href="/series" className="text-white hover:text-red-500 transition">
              المسلسلات
            </Link>
            <Link href="/new" className="text-white hover:text-red-500 transition">
              الجديد
            </Link>
            <Link href="/my-list" className="text-white hover:text-red-500 transition">
              قائمتي
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="search"
              placeholder="ابحث عن فيلم أو مسلسل..."
              className="w-64 bg-gray-900/60 border-gray-700 text-white pr-10 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">تسجيل الدخول</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10"></div>
        <Image src="/images/hero-movie.png" alt="فيلم مميز" fill className="object-cover" priority />
        <div className="relative z-20 h-full flex flex-col justify-end px-6 pb-20 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">الحارس</h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center">
              <Star className="fill-yellow-500 stroke-yellow-500 h-5 w-5" />
              <span className="mr-1 text-yellow-500 font-medium">8.7</span>
            </div>
            <span className="text-gray-300">2023</span>
            <span className="text-gray-300">دراما</span>
            <span className="text-gray-300">135 دقيقة</span>
          </div>
          <p className="text-gray-200 text-lg max-w-2xl mb-8">
            قصة رجل يواجه تحديات كبيرة في حياته بعد أن يتم تكليفه بمهمة حماية شخصية مهمة. يجد نفسه في صراع بين واجبه
            المهني وقيمه الشخصية.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg flex items-center gap-2">
              <Play className="h-5 w-5 fill-white" />
              مشاهدة الآن
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg">
              إضافة إلى القائمة
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">التصنيفات</h2>
        <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
          <CategoryPill name="الكل" active />
          <CategoryPill name="أكشن" />
          <CategoryPill name="دراما" />
          <CategoryPill name="كوميديا" />
          <CategoryPill name="رومانسي" />
          <CategoryPill name="خيال علمي" />
          <CategoryPill name="رعب" />
          <CategoryPill name="مغامرة" />
          <CategoryPill name="تشويق" />
          <CategoryPill name="جريمة" />
        </div>
      </section>

      {/* Featured Movies */}
      <section className="px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">أفلام مميزة</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-gray-700 text-gray-400 hover:text-white hover:border-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <FeaturedMovie title="طريق النجاة" image="/images/movie1.png" year="2023" rating="9.1" category="أكشن" />
          <FeaturedMovie title="الوادي المفقود" image="/images/movie2.png" year="2022" rating="8.5" category="مغامرة" />
          <FeaturedMovie title="ليلة في القاهرة" image="/images/movie3.png" year="2023" rating="8.8" category="دراما" />
          <FeaturedMovie title="الصحراء الحمراء" image="/images/movie4.png" year="2021" rating="7.9" category="تشويق" />
        </div>
      </section>

      {/* New Releases */}
      <section className="px-6 py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">أحدث الإصدارات</h2>
          <Link href="/new-releases" className="text-red-500 hover:text-red-400">
            عرض الكل
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <MovieCard title="سر الماضي" image="/images/movie5.png" year="2023" rating="8.2" />
          <MovieCard title="الحلم الأخير" image="/images/movie6.png" year="2023" rating="7.6" />
          <MovieCard title="رحلة العودة" image="/images/movie7.png" year="2023" rating="8.9" />
          <MovieCard title="الليل الطويل" image="/images/movie8.png" year="2022" rating="7.4" />
          <MovieCard title="صوت الصمت" image="/images/movie9.png" year="2023" rating="9.0" />
          <MovieCard title="الطريق إلى دمشق" image="/images/movie10.png" year="2022" rating="8.3" />
        </div>
      </section>

      {/* Top Rated */}
      <section className="px-6 py-12 bg-gray-900">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">الأعلى تقييماً</h2>
          <Link href="/top-rated" className="text-red-500 hover:text-red-400">
            عرض الكل
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          <MovieCard title="حكاية مدينة" image="/images/movie11.png" year="2021" rating="9.5" />
          <MovieCard title="الوعد الأخير" image="/images/movie12.png" year="2020" rating="9.3" />
          <MovieCard title="ظل الجبل" image="/images/movie13.png" year="2022" rating="9.2" />
          <MovieCard title="الحب في زمن الحرب" image="/images/movie14.png" year="2019" rating="9.4" />
          <MovieCard title="الرجل الغامض" image="/images/movie15.png" year="2021" rating="9.1" />
          <MovieCard title="ليلة القدر" image="/images/movie16.png" year="2020" rating="9.0" />
        </div>
      </section>

      {/* Coming Soon */}
      <section className="px-6 py-12 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-2xl font-bold mb-6">قريباً</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
            <Image
              src="/images/coming-soon1.png"
              alt="فيلم قادم"
              width={900}
              height={500}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-red-500" />
                <span className="text-sm text-gray-300">يصدر في 15 ديسمبر 2023</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">الفارس الأخير</h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                ملحمة تاريخية عن آخر فرسان مملكة قديمة يحاول استعادة العرش المسروق وإنقاذ شعبه من الظلم.
              </p>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                تذكيري عند الإصدار
              </Button>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
            <Image
              src="/images/coming-soon2.png"
              alt="فيلم قادم"
              width={900}
              height={500}
              className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-red-500" />
                <span className="text-sm text-gray-300">يصدر في 5 يناير 2024</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">أسرار المدينة</h3>
              <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                محقق شاب يكتشف سلسلة من الجرائم الغامضة في مدينته، ليجد نفسه في مواجهة شبكة إجرامية كبيرة تهدد المدينة
                بأكملها.
              </p>
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                تذكيري عند الإصدار
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-16 bg-gradient-to-r from-red-900/40 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h2>
          <p className="text-gray-300 mb-8">احصل على إشعارات بأحدث الأفلام والعروض الحصرية</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="bg-black/50 border-gray-700 text-white focus:ring-red-500 focus:border-red-500"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white">اشتراك</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 px-6 py-12 border-t border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-red-500 mb-4 block">
              سينما<span className="text-white">بلس</span>
            </Link>
            <p className="mb-4">منصتك العربية الأولى لمشاهدة أحدث الأفلام والمسلسلات العربية والعالمية.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  الأفلام
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  المسلسلات
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  الجديد
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  الأعلى تقييماً
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">التصنيفات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition">
                  أكشن
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  دراما
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  كوميديا
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  رعب
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  خيال علمي
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">الدعم</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white transition">
                  حسابي
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  الخصوصية
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>© {new Date().getFullYear()} سينمابلس. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}
