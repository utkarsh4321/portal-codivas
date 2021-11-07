import { Pages, root } from '../routes/public.routes'
import CustomRoute from '../routes/CustomRoute';

const CustomLayout = () => {
    return (
        <main className="main-content">
            <CustomRoute pages={Pages} root={root} isPrivate={false} />
        </main>
    )
}

export default CustomLayout;