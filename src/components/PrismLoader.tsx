'use client'
import React, { useEffect } from 'react'
// import Prism from 'prismjs';

// import 'prismjs/themes/prism-okaidia.css'
// import '../prism-atom-dark.css'

import 'prismjs/themes/prism-tomorrow.css'

//import 'prismjs/components/prism-tsx'
// eslint-disable-next-line @typescript-eslint/no-require-imports
// require('prismjs/components/prism-jsx')
// eslint-disable-next-line @typescript-eslint/no-require-imports
// require('prismjs/components/prism-tsx')
//import 'prismjs/components/prism-typescript'

// import 'prismjs/components/prism-jsx'
// import 'prismjs/components/prism-tsx'
// import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace'

const PrismLoader = ({ children }:{ children:string }) => {
    // useEffect(() => {
    //     // Importer Prism dans useEffect
    //     const loadPrism = async () => {
    //         const Prism = await import('prismjs')
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-expect-error
    //         await import('prismjs/components/prism-typescript')
    //         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //         // @ts-expect-error
    //         await import('prismjs/components/prism-tsx')
    //         Prism.highlightAll()
    //     }
    //     loadPrism()
    // }, [])
    useEffect(()=>{
        const loadPrism = async () => {
            const Prism = await import('prismjs');
            await import('prismjs/components/prism-jsx');
            await import('prismjs/components/prism-tsx');
            await import('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');

            Prism.plugins.NormalizeWhitespace.setDefaults({
                'remove-trailing': true,      // Supprime les espaces en fin de ligne
                'remove-indent': true,        // Supprime l'indentation
                'left-trim': true,            // Supprime les espaces à gauche
                'right-trim': true,           // Supprime les espaces à droite
                'break-lines': 120             // Ajoute des sauts de ligne après 80 caractères
            })
            Prism.highlightAll();
        }
        loadPrism();
    }, []);
  return (
    <pre className='scrollbar-hidden' style={{
        backgroundColor:'#3D425B', padding:'8%', margin:0, marginBottom:'4%'}}>
        <code className='language-tsx' style={{color:'#FFFFFF'}}>
            {children}
        </code>
    </pre>
  )
}

export default PrismLoader