/**
 * 切换主题请修改 blog.config.js 中的 THEME 字段
 */
import * as next from './next'
import * as fukasawa from './fukasawa'
import * as hexo from './hexo'
import * as medium from './medium'
import * as example from './example'
import * as sunshine from './sunshine'

export const ALL_THEME = ['hexo', 'next', 'medium', 'fukasawa', 'example','sunshine']
export { hexo, next, medium, fukasawa, example, sunshine }
