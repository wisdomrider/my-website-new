
import Skeleton from 'react-loading-skeleton'
import Cheerio from 'cheerio';
export default function Home() {
  return (
    <div>
      <Skeleton count={25} />
    </div>
  )
}
export async function getStaticProps(context) {
  const googleApps = await (await fetch('https://play.google.com/store/apps/developer?id=Wisdomrider')).text();
  const $ = Cheerio.load(googleApps);
  const apps = $('.ImZGtf');
  const appList = [];
  apps.each((_, el) => {
    const app = $(el);
    appList.push({
      appName: app.find('.WsMG1c').text(),
      appLink: 'https://play.google.com' + app.find('a').attr('href'),
      appIcon: app.find('img').attr('data-src')

    });
  });
  appList.sort(() => Math.random() - 0.5); 

  return { props: { appList } }
}