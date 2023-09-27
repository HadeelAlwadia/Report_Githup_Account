interface ReopGithupPropeties{
    name:string
}

interface ReposGitHupObject{
    error:string
    repos:ReopGithupPropeties[],
    loading:boolean
}

export type {
    ReposGitHupObject
}