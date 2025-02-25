import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import HomepageFeatures from './Features'
import LatestNews from '../LatestNews'


import '../../css/custom.css'
import Banner from './Features/Banner'

// function HomepageHeader() {
//   return (
//     <header
//       className='header'
//       style={{
//         backgroundImage: `url('/img/banner.jpg')`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'cover'
//       }}
//     >
//       <div className='container'>
//         <Heading as='h1' className='headerHomepage'>
//           Nhân vật 3D
//         </Heading>
//         <div className='mx-16'>
//           <div>Chào mừng bạn đã đến với mục Profile Nhân Vật trên. Nơi đây sẽ đưa bạn đến với thế giới của những nhân vật hoạt hình đầy màu sắc và cá tính. </div>
//           <div>Nơi dành cho các bạn muốn tìm hiểu thêm về các nhân vật yêu thích, cũng như khám phá thêm nhiều gương mặt đầy triển vọng trong thế giới hoạt hình.</div>
//         </div>
//       </div>
//     </header>
//   )
// }

export default function Home({ homePageBlogMetadata, recentPosts }) {
  return (
    <Layout>
      <Banner />
      <HomepageFeatures />
    </Layout>
  )
}
