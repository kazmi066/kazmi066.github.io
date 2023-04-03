import Container from "../../components/Container";
import { ReactComponent as WritingIcon } from '../../assets/writingIcon.svg';
import { ReactComponent as ArticleIcon } from '../../assets/articleIcon.svg';
import { useEffect } from "react";
import { useState } from "react";

export default function Writings() {
  const [loading, setLoading] = useState('false');
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);

      const article = await fetch(`https://dev.to/api/articles?username=kazmi066`);
      const response = await article.json();

      setArticles(response);
      setLoading(false);
    }

    fetchArticles();
  }, []);

  return (
    <main className="text-white">
      <Container>
        <div className="mt-4">
          <div className="sm:w-64 w-54 flex align-center gap-2 mt-4 mb-8">
              <h3 className="font-bold sm:text-[1.5rem] text-[1.3rem]">
                Writings
              </h3>
              <WritingIcon className="w-8 h-8" />
          </div>
          <section>
            {
              loading
                ? <span className="loader"></span>
                : <>
                    {
                      articles.length > 0
                      && articles.map((art) => (
                        <article
                          key={art.id}
                          className="mb-4 flex align-start">
                          <ArticleIcon className="min-w-[60px] -ml-4" />
                          <div>
                            <h3
                              onClick={() => window.open(art.url, "_blank")}
                              className="font-bold text-[1.2rem] transition-all hover:cursor-pointer hover:text-slate-300">
                              {art.title}
                            </h3>
                            <p className="font-light text-[14px] text-slate-200">
                              {art.tags}
                            </p>
                          </div>
                        </article>
                      ))
                    }
                  </>
            }
          </section>
        </div>
      </Container>
    </main>
  )
}
