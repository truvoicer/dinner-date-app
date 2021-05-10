import React, {useEffect, useState} from 'react';
import FullWidthLayout from "../../../components/layout/FullWidthLayout";
import {useRouter} from "next/router";
import {MEMBER_PROFILE_VIEW} from "../../../config/constants/views/view-constants";
import ViewBuilder from "../../../components/views/builder/ViewBuilder";
import {isNotEmpty} from "../../../library/helpers/utils-helper";

const MemberProfilePage = () => {
    const [showForm, setShowForm] = useState(false);
    const router = useRouter()
    useEffect(() => {
        if (isNotEmpty(router.query.username)) {
            setShowForm(true)
        }
    }, [router.query.username]);

    return (
        <FullWidthLayout>
            {showForm &&
                <ViewBuilder username={router.query.username}  pageName={MEMBER_PROFILE_VIEW}/>
            }
        </FullWidthLayout>
    );
};

export default MemberProfilePage;
