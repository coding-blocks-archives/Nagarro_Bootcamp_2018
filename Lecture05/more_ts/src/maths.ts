function add (
    a: number | string, 
    b: number | string = a): number | string {
    return <any>a + <any>b
}
add(3,4)
add('aaa', 'bbb')
