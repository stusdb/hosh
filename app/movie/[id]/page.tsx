import Link from "next/link"
import Image from "next/image"
import { Play, Star, Clock, Calendar, ArrowLeft, Share2, Heart, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MovieCard from "@/components/movie-card"

export default function MoviePage({ params }: { params: { id: string } }) {
  // This would normally fetch movie data based on the ID
  const movieId = params.id

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
        <Button className="bg-red-600 hover:bg-red-700 text-white">تسجيل الدخول</Button>
      </header>

      {/* Back Button */}
      <div className="px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
          <ArrowLeft className="h-4 w-4" />
          <span>العودة</span>
        </Link>
      </div>

      {/* Movie Hero */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10"></div>
        <Image
          src="/images/hero-movie.png"
          alt="صورة الفيلم"
          width={1920}
          height={1080}
          className="w-full h-[60vh] object-cover"
        />

        <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-80">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="shrink-0">
              <Image
                src="/images/movie1-poster.png"
                alt="ملصق الفيلم"
                width={300}
                height={450}
                className="rounded-lg shadow-2xl w-64 h-96 object-cover"
              />
            </div>
            <div className="flex flex-col justify-end">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">الحاجه</h1>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Star className="fill-yellow-500 stroke-yellow-500 h-5 w-5" />
                  <span className="mr-1 text-yellow-500 font-medium">ززززززززززز</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-300">135 دق</span>
                </div>
                <span className="px-2 py-1 bg-red-600/20 text-red-500 rounded text-sm">دراما</span>
                <span className="px-2 py-1 bg-red-600/20 text-red-500 rounded text-sm">أكشن</span>
                <span className="px-2 py-1 bg-red-600/20 text-red-500 rounded text-sm">تشويق</span>
              </div>
              <p className="text-gray-300 text-lg max-w-3xl mb-8">
                قصة رجل يواجه تحديات كبيرة في حياته بعد أن يتم تكليفه بمهمة حماية شخصية مهمة. يجد نفسه في صراع بين واجبه
                المهني وقيمه الشخصية، مما يضعه في مواجهة مع قوى خفية تسعى لتحقيق أهدافها بأي ثمن.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg flex items-center gap-2">
                  <Play className="h-5 w-5 fill-white" />
                  مشاهدة الآن
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-lg flex items-center gap-2"
                >
                  <Plus className="h-5 w-5" />
                  إضافة إلى القائمة
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 rounded-full w-12 h-12 flex items-center justify-center p-0"
                >
                  <Heart className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10 rounded-full w-12 h-12 flex items-center justify-center p-0"
                >
                  <Share2 className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movie Details */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Tabs defaultValue="about" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-3 mb-8">
            <TabsTrigger value="about" className="text-lg">
              عن عنعنعنعنعنعنعن
            </TabsTrigger>
            <TabsTrigger value="cast" className="text-lg">
              طاقم العمل
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-lg">
              التقييمات
            </TabsTrigger>
          </TabsList>
          <TabsContent value="about" className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">القصة</h3>
              <p className="text-gray-300 leading-relaxed">
                يتناول الفيلم قصة سامي، ضابط أمن سابق يتم تكليفه بمهمة حماية رجل أعمال مهم مهدد بالقتل. خلال المهمة،
                يكتشف سامي مؤامرة كبيرة تهدد أمن البلاد، ويجد نفسه في صراع مع منظمة إجرامية خطيرة. يواجه سامي تحديات
                شخصية ومهنية، حيث يضطر للاختيار بين واجبه المهني وقيمه الشخصية، خاصة عندما يكتشف تورط أشخاص مقربين منه
                في المؤامرة.
                <br />
                <br />
                مع تصاعد الأحداث، يدخل سامي في سلسلة من المطاردات والمواجهات الخطيرة، ويكتشف أسراراً من ماضيه ترتبط بشكل
                غير متوقع بالقضية الحالية. يقدم الفيلم رؤية عميقة حول مفاهيم الولاء والتضحية والعدالة في عالم مليء
                بالخداع والمصالح المتضاربة.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">تفاصيل الفيلم</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">المخرج:</span>
                    <span>أحمد كمال</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">الكاتب:</span>
                    <span>سمير حسن</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">تاريخ الإصدار:</span>
                    <span>15 يونيو 2023</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">المدة:</span>
                    <span>135 دقيقة</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">التصنيف العمري:</span>
                    <span>+16</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">اللغة:</span>
                    <span>العربية</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">الجوائز</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">أفضل فيلم</p>
                      <p className="text-gray-400 text-sm">مهرجان القاهرة السينمائي 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">أفضل ممثل</p>
                      <p className="text-gray-400 text-sm">جوائز السينما العربية 2023</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">أفضل تصوير سينمائي</p>
                      <p className="text-gray-400 text-sm">مهرجان دبي السينمائي 2023</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="cast" className="space-y-8">
            <h3 className="text-xl font-bold mb-6">الممثلون الرئيسيون</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="text-center">
                  <div className="relative w-full aspect-square mb-3 overflow-hidden rounded-full">
                    <Image src={`/images/actor${i}.jpg`} alt={`ممثل ${i}`} fill className="object-cover" />
                  </div>
                  <h4 className="font-medium">أحمد حلمي</h4>
                  <p className="text-sm text-gray-400">دور سامي</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-6 mt-12">طاقم العمل</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-6">
              <div>
                <h4 className="font-medium">أحمد كمال</h4>
                <p className="text-sm text-gray-400">المخرج</p>
              </div>
              <div>
                <h4 className="font-medium">سمير حسن</h4>
                <p className="text-sm text-gray-400">كاتب السيناريو</p>
              </div>
              <div>
                <h4 className="font-medium">محمد علي</h4>
                <p className="text-sm text-gray-400">مدير التصوير</p>
              </div>
              <div>
                <h4 className="font-medium">ليلى كريم</h4>
                <p className="text-sm text-gray-400">مونتاج</p>
              </div>
              <div>
                <h4 className="font-medium">خالد سليم</h4>
                <p className="text-sm text-gray-400">موسيقى تصويرية</p>
              </div>
              <div>
                <h4 className="font-medium">عمر فاروق</h4>
                <p className="text-sm text-gray-400">مدير إنتاج</p>
              </div>
              <div>
                <h4 className="font-medium">سارة أحمد</h4>
                <p className="text-sm text-gray-400">تصميم الأزياء</p>
              </div>
              <div>
                <h4 className="font-medium">يوسف حسني</h4>
                <p className="text-sm text-gray-400">مؤثرات بصرية</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">التقييمات والمراجعات</h3>
              <Button className="bg-red-600 hover:bg-red-700 text-white">إضافة تقييم</Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-gray-800 rounded-lg p-6">
                  <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="font-bold">{String.fromCharCode(64 + i)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium">مستخدم{i}</h4>
                        <p className="text-xs text-gray-400">منذ {i} أيام</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="fill-yellow-500 stroke-yellow-500 h-5 w-5" />
                      <span className="mr-1 text-yellow-500 font-medium">{9 - i}.0</span>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    {i === 1 &&
                      "فيلم رائع بكل المقاييس! الإخراج متقن والتمثيل استثنائي، خاصة أداء البطل الرئيسي. القصة مشوقة ومليئة بالتحولات غير المتوقعة. أنصح بمشاهدته بشدة!"}
                    {i === 2 &&
                      "أحببت الفيلم بشكل عام، لكن كان هناك بعض المشاهد التي شعرت أنها غير ضرورية. التصوير والموسيقى كانا رائعين، والنهاية كانت مفاجئة ومقنعة."}
                    {i === 3 &&
                      "فيلم جيد، لكنه لم يرتق لمستوى التوقعات. بعض الأحداث كانت متوقعة، والإيقاع كان بطيئاً في بعض الأجزاء. مع ذلك، أداء الممثلين كان جيداً."}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                عرض المزيد من التقييمات
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Similar Movies */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">أفلام مشابهة</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <MovieCard title="المطاردة" image="/images/movie5.png" year="2022" rating="8.3" />
          <MovieCard title="الخطة الأخيرة" image="/images/movie6.png" year="2023" rating="7.9" />
          <MovieCard title="ليلة العملية" image="/images/movie7.png" year="2021" rating="8.5" />
          <MovieCard title="الضابط" image="/images/movie8.png" year="2022" rating="8.1" />
          <MovieCard title="المهمة المستحيلة" image="/images/movie9.png" year="2023" rating="8.7" />
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
