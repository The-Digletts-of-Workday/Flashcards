import React from "react";
import { Route, Routes } from "react-router-dom";
import PublicSetsOverview from "./PublicSetsOverview/PublicSetsOverview.jsx";
import PublicFlashcardOverviewPage from "./PublicFlashcardOverviewPage/PublicFlashcardOverviewPage.jsx";
import NotFound from "../NotFound/NotFound.jsx";

export default function PublicSetsPage() {
    return (
        <>
            <Routes>
                <Route path="search/:searchValue" element={<PublicSetsOverview />} />
                <Route path="/:setId" element={<PublicFlashcardOverviewPage />} />
                <Route path="/studymode/:setId" element={<PublicFlashcardOverviewPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
