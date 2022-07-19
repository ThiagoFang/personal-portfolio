
export type ProjectsType = {
    name: string,
    description: string,
    url: string,
    links: {
        github: string,
        page?: string
    },
    techs: string[]
}

export const ProjectsInfo: ProjectsType[] = [
    {
        name: 'Pokedex', 
        description: 'Um site completamente dinâmico, com base em requisições a uma API Externa', 
        url: 'pokedex',
        links: {
            github: 'https://github.com/ThiagoFang/pokemon-list',
            page: 'https://pokemon-list-qkuo4vrqm-thiagofang.vercel.app/'
        },
        techs: ['css', 'html', 'react', 'javascript']
    },
    {
        name: 'Watches Website', 
        description: 'Um site de venda de relógios totalmente responsivo e com várias funções', 
        url: 'watches',
        links: {
            github: 'https://github.com/ThiagoFang/responsive-watches-website',
            page: 'https://thiagofang.github.io/responsive-watches-website/'
        },
        techs: ['css', 'html', 'javascript']
    },
    {
        name: 'Pizza Store', 
        description: 'Um site interativo sobre compras de pizzas, com carrinho funcional', 
        url: 'pizzas',
        links: {
            github: 'https://github.com/ThiagoFang/pizza-store',
            page: 'https://thiagofang.github.io/pizza-store/'
        },
        techs: ['css', 'html', 'javascript']
    },
    {
        name: 'DevFinance', 
        description: 'Um gerenciador de despesas desenvolvido com react + TypeScript', 
        url: 'devfinances',
        links: {
            github: 'https://github.com/ThiagoFang/react-expense-tracker',
            page: 'https://react-expense-tracker-lilac.vercel.app/'
        },
        techs: ['css', 'html', 'javascript', 'react', 'typescript']
    },
    {
        name: 'Death Stranding Landing', 
        description: 'Uma Landing Page sobre o jogo Death Stranding', 
        url: 'deathstranding',
        links: {
            github: 'https://github.com/ThiagoFang/death-stranding-landing',
            page: 'https://thiagofang.github.io/death-stranding-landing/'
        },
        techs: ['html', 'css']
    },
    {
        name: 'DevMemory', 
        description: 'Um jogo da memoria desenvolvido com react + TypeScript', 
        url: 'memory',
        links: {
            github: 'https://github.com/ThiagoFang/react_devMemory',
            page: 'https://react-dev-memory.vercel.app/'
        },
        techs: ['html', 'css', 'javascript', 'typescript', 'react']
    },
    {
        name: 'React RPG Game', 
        description: 'Um simples "jogo" de RPG em React.',
        url: 'rpggame',
        links: {
            github: 'https://github.com/ThiagoFang/rpggame',
            page: 'https://rpggame-five.vercel.app/'
        },
        techs: ['html', 'css', 'javascript', 'typescript','react']
    },
    {
        name: 'Fighting Game', 
        description: 'Um Jogo de luta em HTML e Javascript',
        url: 'fighting',
        links: {
            github: 'https://github.com/ThiagoFang/fighting-game-javascript',
            page: 'https://thiagofang-fighting-game.netlify.app/'
        },
        techs: ['html', 'css', 'javascript']
    },
    
    {
        name: 'Multiple Steps Form', 
        description: 'Um Formulário de multiplos passos em React',
        url: 'multiform',
        links: {
            github: 'https://github.com/ThiagoFang/react-multiform',
        },
        techs: ['html', 'css', 'javascript', 'typescript','react']
    },
    
]