/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from 'react';
import {CoreComponent} from "../../../types";
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface TitleV2Model extends CoreComponent{
    text?: string;
    linkURL?: string;
    linkDisabled: boolean;
    type: string;
}

export function TitleV2IsEmptyFn(props:TitleV2Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class TitleV2<Model extends TitleV2Model> extends AbstractCoreComponent<Model, any> {

    public static defaultProps = {
        hidePlaceHolder: false
    };

    getEmptyPlaceHolderText(): string {
        return 'Contrib Title V2';
    }


    isEmpty(): boolean{
        return TitleV2IsEmptyFn(this.props);
    }

    getContents(){

        if( !this.props.linkDisabled){
            return (
                <a className="cmp-title__link" href={this.props.linkURL ? this.props.linkURL : '#'}>
                    {this.props.text}
                </a>
            )
        }

        return (
            <>
                {this.props.text}
            </>
        )
    }

    renderComponent(){

        return (
            <div className="cmp-title">
                {
                    React.createElement(
                        `${this.props.type}`,
                        {
                            className: 'cmp-title__text',
                        },
                        this.getContents()
                    )
                }

            </div>
        )
    }
}