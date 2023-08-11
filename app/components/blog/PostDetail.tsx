'use client'

import React from 'react'
import { styled } from 'styled-components'

interface Props {
  html: string
}

const PostDetail = ({ html }: Props) => {
  return (
    <Base dangerouslySetInnerHTML={{__html: html}}></Base>
  )
}

const Base = styled.div`
font-size: large;
line-height: 25px;
h1,h2,h3,h4 {
  padding: 1rem 0;
  > a {
    text-decoration: none;
    color: #854d0e80;
  }
}
pre {
  overflow-x: auto;
  margin: 0;

  > code {
    display: flex;
    flex-direction: column;
    gap: 5px;

    > span {
    display: inline-block;
    box-sizing: border-box;
    margin: 3px 0;
  }
  }
}

div[data-rehype-pretty-code-title] {
  padding: 5px;
  margin: 3px 0;
  position: relative;
  margin-top: 2rem;
  border: 1px solid gray;
  font-size: smaller;
  font-weight: bold;
  &::after {
    content: attr(data-language);
    position: absolute;
    right: 10px;
    font-size: smaller;
    font-weight: lighter;
  }
}

div[data-rehype-pretty-code-caption] {
  padding: 5px;
  margin: 3px 0;
  position: relative;
  margin-bottom: 2rem;
  border: 1px solid gray;
  font-size: smaller;
}

span[data-highlighted-line] {
  background-color: #c2bae421;
  width: 100%;
  padding: 5px 0;

  &::before {
    color: yellowgreen !important;
  }
}
  code {
  counter-reset: line;
}
 
code > [data-line]::before {
  counter-increment: line;
  content: counter(line);
 
  /* Other styling */
  display: inline-block;
  width: 1rem;
  margin-right: 2rem;
  text-align: right;
  color: gray;
}
 
code[data-line-numbers-max-digits='2'] > [data-line]::before {
  width: 2rem;
}
 
code[data-line-numbers-max-digits='3'] > [data-line]::before {
  width: 3rem;
}

span[data-chars-id] {
  border-bottom: 2px solid;
  padding: 0.25rem;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);
  font-weight: bold;
  border-radius: 5px;
}

span[data-chars-id='a'] {
    border-bottom-color: rgb(219 39 119/1);
    background-color: #9f123980;
    color: rgb(249 168 212/1)!important;
}
span[data-chars-id='b'] {
  border-bottom-color: rgb(202 138 4/1);
    background-color: #854d0e80;
    color: rgb(253 224 71/1)!important;
}
span[data-chars-id='c'] {
  border-bottom-color: rgb(147 51 234/1);
    background-color: #6b21a880;
    color: rgb(233 213 255/1)!important;
}

> p {
  > img {
    max-width: 100%;
    width: 100%;
  }

}
p {
  a {
  border-bottom: 2px dashed gray;
}
}

blockquote {
  font-size: medium;
  margin: 0;
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 1rem;

  > p {
    margin: 10px;
    &:first-of-type {
      padding: 3px 7px;
      background-color: #4b4b4b;
      display: inline-block;
      color: #fff;
      border-radius: 5px;
    }
  }
}

ul {
  > li {
    list-style: circle;
    margin-left: 1rem;

    &:not(:first-of-type) {
      margin-top: 5px;
    }
  }
}

ol {
  padding: 0;
  > li {
    list-style: decimal;
    margin-left: 1rem;

    &:not(:first-of-type) {
      margin-top: 5px;
    }
  }
}

h2 {
  border-bottom: 2px solid gray;
  padding: 4rem 0 1rem 0;
}

p, ul {
  code {
    padding: 3px ;
    margin: 0 2px;
    background-color: #4b4b4b;
    color: #fff;
    border-radius: 5px;
  }
}

`

export default PostDetail