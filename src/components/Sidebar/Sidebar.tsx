import Style from './Sidebar.module.less'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { iNav } from '@/types/interfaceType'
function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()
    const sidebarList: iNav[] = [
        {
            id: 1,
            name: '首页',
            icon: '',
            path: '/main/home'
        },
        {
            id: 2,
            name: '分享',
            icon: '',
            path: '/main/share'
        },
        {
            id: 3,
            name: '文章',
            icon: '',
            path: '/main/article'
        },
        {
            id: 4,
            name: '留言板',
            icon: '',
            path: '/main/message'
        },
        {
            id: 5,
            name: '朋友们',
            icon: '',
            path: '/main/friend'
        }
    ]
    const handleGoToPage = (newPath: string, newId: number) => {
        const oldPath = location.pathname
        if (newPath === oldPath) {
            return
        }
        navigate(newPath)
        setActiveId(newId)
    }
    const [activeId, setActiveId] = useState(1)
    return (
        <>
            <div className={Style.sidebarBox}>
                <h2>余心知秋的后台</h2>
                <ul className={Style.sidebarList}>
                    {sidebarList.map((item) => { return (<li className={classNames(Style.listItem, { [Style.activeItem]: item.id === activeId })} key={item.id} onClick={() => handleGoToPage(item.path, item.id)}>{item.name}</li>) })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar
