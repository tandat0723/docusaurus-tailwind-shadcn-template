import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import HomepageFeatures from './Features'
import LatestNews from '../LatestNews'


import '../css/custom.css'
import Banner from './Features/Banner'

export default function Body({ homePageBlogMetadata, recentPosts }) {
    return (
        <Layout>
            <Banner />
            <HomepageFeatures />
        </Layout>
    )
}