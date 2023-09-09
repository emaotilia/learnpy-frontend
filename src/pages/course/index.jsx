import '../../assets/css/course.css';
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import pdf from '../../assets/files/curs-1.pdf';

import { pdfjs } from 'react-pdf';

import { styled } from '@mui/material/styles';

import { useState } from 'react';

import {
    Page,
    Document as BaseDocument
} from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Container = styled('div')({
    minHeight: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&::-webkit-scrollbar': {
        width: '8px',
        height: '8px'
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#001528'
    }
})

const Document = styled(BaseDocument)({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    padding: "20px 0",
    "& .react-pdf__Page__textContent": {
        border: "1px solid darkgrey",
        boxShadow: "5px 5px 5px 1px #ccc",
        borderRadius: "5px",
    },
    "& .react-pdf__Page__canvas": {
        margin: "0 auto"
    },
    "& .react-pdf__Page__annotations.annotationLayer": {
        padding: "20px"
    }
})

function Course() {
    const [numPages, setNumPages] = useState(undefined);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <Container>
            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>
        </Container>
    )
}

export default Course;