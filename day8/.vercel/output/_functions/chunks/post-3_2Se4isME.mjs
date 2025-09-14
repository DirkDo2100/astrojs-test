import { l as createVNode, av as Fragment, aw as __astro_tag_component__ } from './astro/server_BmAgNbLp.mjs';
import { N as Note } from './Counter_DA167fn5.mjs';
import 'clsx';

const frontmatter = {
  "title": "Bài viết 3 (MDX)",
  "description": "Ví dụ bài viết dùng MDX",
  "date": "2025-09-14T00:00:00.000Z"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "fgfgfg;"
    }), "\n", createVNode(Note, {
      "client:load": true,
      "client:component-path": "/home/dirk/DirkData/Astrojs/day8/src/components/Counter",
      "client:component-export": "default",
      "client:component-hydration": true
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/blog/post-3.mdx";
const file = "/home/dirk/DirkData/Astrojs/day8/src/content/blog/post-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/dirk/DirkData/Astrojs/day8/src/content/blog/post-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
