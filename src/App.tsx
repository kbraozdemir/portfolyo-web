import './App.css'

const projects = [
  {
    title: 'WeddingApp',
    problem: 'Düğün sonrası oluşan dijital anılar farklı platformlara dağıldığı için çiftler tüm içeriklerini kolayca toplayamıyor ve yönetemiyor.',
    solution: 'Düğüne özel tek bir platform oluşturarak fotoğraf, video ve mesajların merkezi olarak toplanmasını sağladım.',
    implementation: 'React ile kullanıcı dostu bir arayüz, TypeScript ile sağlam bir yapı ve CSS ile estetik bir tasarım oluşturdum.',
    tech: ['React', 'TypeScript', 'CSS', 'Responsive', 'UI/UX'],
    link: 'https://wedding-app-three-chi.vercel.app/'
  },
  {
    title: 'LessonFlow',
    problem: 'Eğitim platformlarında ders içerikleri düzensiz bir şekilde tutuluyordu. Bu da öğretmenlerin ve idari personelin ders programlarını takip edememesine neden oluyordu.',
    solution: 'Ders içeriklerini düzenli bir şekilde sergileyen, öğretmenlerin ve idari personelin kolayca erişebileceği, değişiklik olduğunda öğretmenlere bildirim gönderen bir arayüz tasarladım.',
    implementation: 'React ile dinamik içerik yönetimi, TypeScript ile tip güvenliği ve CSS ile kullanıcı dostu bir tasarım oluşturdum.',
    tech: ['Responsive', 'TypeScript', 'CSS', 'React', 'UI/UX'],
    link: 'https://lesson-f-low.vercel.app/'
  },
  {
    title: 'KeşifFlow',
    problem: 'Metraj hesaplama süreçleri genellikle karmaşık ve zaman alıcıydı, bu da kullanıcıların projelerini etkili bir şekilde yönetememesine neden oluyordu.',
    solution: 'DXF dosyalarını işleyerek metraj hesaplamalarını otomatikleştirdim. Malzeme ihtiyaçlarını hızlıca belirleyebilen, kullanıcı dostu bir arayüz tasarladım.',
    implementation: 'Python ile DXF dosyalarını işleyerek metraj hesaplama algoritması geliştirdim. React ve TypeScript kullanarak kullanıcı dostu bir arayüz oluşturdum.',
    tech: ['Python', 'React', 'Electron'],
    link: '#'
  }
]

function App() {
  return (
    <main className="page-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Merhaba, ben Kübra Özdemir</span>
          <h1>Kullanıcı Problemlerini Analiz Edip Dijital Çözümler Tasarlıyorum.</h1>
          <p>
            Gerçek hayattaki problemleri analiz ederek kullanıcı odaklı dijital ürünler tasarlıyor ve prototipliyorum.
          </p>
          <div className="hero-meta">
            <div>
              <strong>Uzmanlık</strong>
              <span>React · TypeScript · CSS</span>
            </div>
            <div>
              <strong>Odak</strong>
              <span>Minimal UI · Performans · Responsive</span>
            </div>
          </div>
          <a href="#projects" className="button primary-button">
            Projelerime göz at
          </a>
        </div>
      </header>

      <section className="section about-section">
        <div className="section-header">
          <span className="eyebrow">Hakkımda</span>
          <h2>Kısa tanıtım</h2>
        </div>
        <p>
          Kodlama eğitmenliği deneyimim ve yazılım projelerim sayesinde kullanıcı ihtiyaçlarını analiz etmeyi, problemleri tanımlamayı ve bunlara dijital çözümler üretmeyi seviyorum. Hedefim Product Management alanında uzmanlaşmak ve kullanıcı odaklı ürünler geliştirmek.
        </p>
      </section>

      <section id="projects" className="section project-section">
        <div className="section-header">
          <span className="eyebrow">Projeler</span>
          <h2>Öne çıkan çalışmalar</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-top">
                <span className="project-tag">Preview</span>
                <a href={project.link} className="project-link">
                  Detay
                </a>
              </div>
              <h3>{project.title}</h3>
              <div className="project-detail">
                <strong>Problem</strong>
                <p>{project.problem}</p>
              </div>
              <div className="project-detail">
                <strong>Çözüm</strong>
                <p>{project.solution}</p>
              </div>
              <div className="project-detail">
                <strong>Uygulama</strong>
                <p>{project.implementation}</p>
              </div>
              <div className="project-tags">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-card">
          <div>
            <span className="eyebrow">İletişim</span>
            <h2>Birlikte çalışalım</h2>
            <p>
              Yeni bir proje fikrin varsa ya da mevcut işlerini geliştirmek istiyorsan,
              hızlıca iletişime geçebilirsin.
            </p>
          </div>
          <a className="button secondary-button" href="mailto:kbraozdemir18@gmail.com">
            Bana ulaş
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
