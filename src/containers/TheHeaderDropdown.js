import React, { Suspense } from 'react'
import {
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
	CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import history from "../constant/history";

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

class TheHeaderDropdown extends React.Component {
	onLogout(e){
        localStorage.clear();
        history.push('/login');
        window.location.reload(true);
	}
	render(){
        return (
            <Suspense fallback={loading}>
            <CDropdown
                inNav
                className="c-header-nav-items mx-2"
                direction="down"
            >
                <CDropdownToggle className="c-header-nav-link" caret={false}>
                    <div className="c-avatar">
                        <CImg
                            src={'avatars/6.jpg'}
                            className="c-avatar-img"
                            alt="admin@bootstrapmaster.com"
                        />
                    </div>
                </CDropdownToggle>
                <CDropdownMenu className="pt-0" placement="bottom-end">
                    <CDropdownItem
                        header
                        tag="div"
                        color="light"
                        className="text-center"
                    >
                        <strong>Account</strong>
                    </CDropdownItem>
                    <CDropdownItem>
                        <CIcon name="cil-user" className="mfe-2" />Profile
                    </CDropdownItem>
                    <CDropdownItem onClick={(e)=>this.onLogout(e)}>
                        <CIcon name="cil-lock-locked" className="mfe-2" /> 
                        Logout
                    </CDropdownItem>
                </CDropdownMenu>
            </CDropdown>
            </Suspense>
        )
    }
}

export default TheHeaderDropdown
