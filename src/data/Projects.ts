
export type ProjectsType = {
    name: string,
    description: string,
    url: string,
    links: {
        github: string,
        page: string
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
        name: 'To-Do List', 
        description: 'Uma Lista de Tarefas com algums elementos de RPG.',
        url: 'todo',
        links: {
            github: 'https://github.com/ThiagoFang/ToDoList-RPG-Elements',
            page: 'https://thiagofang.github.io/ToDoList-RPG-Elements/'
        },
        techs: ['html', 'css', 'javascript']
    }
]