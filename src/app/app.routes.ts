import { Routes } from '@angular/router';
import { OneWayDatabindingComponent } from './components/data-binding/one-way-databinding/one-way-databinding.component';
import { TwoWayDataBindingComponent } from './components/data-binding/two-way-data-binding/two-way-data-binding.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { StructuralDirectivesComponent } from './components/directives/structural-directives/structural-directives.component';
import { IfElseComponent } from './components/contrl-flow/if-else/if-else.component';
import { ForSwitchComponent } from './components/contrl-flow/for-switch/for-switch.component';
import { DefaultPipeComponent } from './components/pipes/default-pipe/default-pipe.component';
import { AsyncPipeComponent } from './components/pipes/async-pipe/async-pipe.component';
import { CustomPipeComponent } from './components/pipes/custom-pipe/custom-pipe.component';


export const routes: Routes = [
    {
        path: 'one-way',
        component: OneWayDatabindingComponent
    },
    {
        path: 'two-way',
        component: TwoWayDataBindingComponent
    },
    {
        path: 'attribute-dir',
        component: AttributeDirectiveComponent
    },
    {
        path: 'structural-dir',
        component: StructuralDirectivesComponent
    },
    {
        path: 'if-else',
        component: IfElseComponent
    },
    {
        path: 'for-switch',
        component: ForSwitchComponent
    },
    {
        path: 'default-pipe',
        component: DefaultPipeComponent
    },
    {
        path: 'async-pipe',
        component: AsyncPipeComponent
    },
    {
        path: 'custom-pipe',
        component: CustomPipeComponent
    }
];
