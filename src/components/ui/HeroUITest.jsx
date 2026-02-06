import React from 'react';
import { Button } from "@heroui/react";

export const HeroUITest = () => {
    return (
        <div className="flex flex-col items-center gap-4 p-8 bg-indigo-50/50 rounded-2xl my-8 mx-4">
            <h3 className="text-xl font-bold text-gray-900">HeroUI Integration Test</h3>
            <div className="flex gap-4">
                <Button color="primary" variant="solid" shadow>
                    HeroUI Solid
                </Button>
                <Button color="secondary" variant="flat">
                    HeroUI Flat
                </Button>
            </div>
        </div>
    );
};
