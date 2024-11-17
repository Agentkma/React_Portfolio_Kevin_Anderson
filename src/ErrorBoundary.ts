// ! External
import React, { Component } from "react";

// ! Internal

import SomethingWentWrong from "./Pages/SomethingWentWrong";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(
            "Error Boundary",
            `error: ${error}, errorInfo: ${errorInfo}`
        );
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <SomethingWentWrong></SomethingWentWrong>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
