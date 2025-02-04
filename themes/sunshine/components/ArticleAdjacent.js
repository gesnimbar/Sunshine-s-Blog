import Link from 'next/link'
import CONFIG_SUNSHINE from '../config_sunshine'

/**
 * 上一篇，下一篇文章
 * @param {prev,next} param0
 * @returns
 */
export default function ArticleAdjacent ({ prev, next }) {
  if (!prev || !next || !CONFIG_SUNSHINE.ARTICLE_ADJACENT) {
    return <></>
  }
  return <section className='text-gray-800 items-center text-xs md:text-sm flex justify-between m-1 '>
    <Link href={`/${prev.slug}`} passHref>
      <a className='py-1  cursor-pointer hover:underline justify-start items-center dark:text-white flex w-full h-full duration-200'>
        <i className='mr-1 fas fa-angle-left' />{prev.title}
      </a>
    </Link>
    <Link href={`/${next.slug}`} passHref>
      <a className='py-1 cursor-pointer hover:underline justify-end items-center dark:text-white flex w-full h-full duration-200'>{next.title}
        <i className='ml-1 my-1 fas fa-angle-right' />
      </a>
    </Link>
  </section>
}
