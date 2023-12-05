interface RenderIf {
    condition: boolean
    children: React.ReactNode
}


export function RenderIf({ condition, children }: RenderIf) {
    if (condition) {
        return children
    }

    return null
}